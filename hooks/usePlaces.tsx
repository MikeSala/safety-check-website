import { useEffect, useState } from 'react'

type APIResponse = {
  predictions: Prediction[]
}

type Prediction = {
  place_id: string
  description: string
  structured_formatting: {
    main_text: string
    secondary_text: string
  }
  terms: PredictionTerms[]
}

type PredictionTerms = {
  offset: number
  value: string
}

export type Place = {
  placeId: string
  description: string
  mainText: string
  secondaryText: string
}

export function usePlaces(query: string): [Place[], boolean] {
  const [places, setPlaces] = useState<Place[]>([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (isFetching) return

    const delayDebounceFn = setTimeout(() => {
      fetchPlaces()
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  const fetchPlaces = () => {
    void (async function fetchData() {
      if (!query) {
        setPlaces([])
        return
      }

      setIsFetching(true)
      try {
        const url =
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/maps?` +
          new URLSearchParams({
            input: query,
          })
        const response = await fetch(url)
        const data: APIResponse = await response.json()
        setPlaces(data.predictions.map(predictionToPlace))
      } catch (error) {
        console.error(error)
      } finally {
        setIsFetching(false)
      }
    })()
  }

  return [places, isFetching]
}

function predictionToPlace(p: Prediction): Place {
  return {
    description: formatAddress(p.description),
    mainText: p.structured_formatting.main_text,
    secondaryText: p.structured_formatting.secondary_text,
    placeId: p.place_id,
  }
}

function formatAddress(fullAddress: string): string {
  if (!fullAddress) return ''
  const addressParts = fullAddress.split(',').slice(0, -1)
  const lastPart = addressParts.pop()
  if (!lastPart) return fullAddress
  const lastPartParts = lastPart.split(' ')
  const lastPartState = lastPartParts.pop()
  if (!lastPartState) return fullAddress
  const city = lastPartParts.join(' ')
  const state = formatState(lastPartState)
  const address = addressParts.join(',')
  const addressPartsWithState = [address, city, state]
  const addressPartsWithStateAndComma = addressPartsWithState.filter(Boolean)
  return addressPartsWithStateAndComma.join(', ')
}

function formatState(state: string): string {
  if (state === 'VIC' || state === 'QLD') {
    return convertToPascal(state)
  }
  return state
}

function convertToPascal(val: string): string {
  return val.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase()
  })
}
