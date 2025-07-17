import { useAutocomplete } from "@mui/material/";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import React, { LegacyRef, useEffect, useId, useMemo } from "react";
import { FieldValues } from "react-hook-form";
import {
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form/dist/types/form";
import ErrorMessage from "~/components/ErrorMessage";
import { Label } from "~/components/Fields/Label";

// TODO: Replace with Tailwind styling
const Listbox: any = styled("ul")(({ theme }) => ({
  margin: 0,
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 8,
  paddingBottom: 8,
  marginTop: 8,
  marginBottom: 8,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.background.paper,
  overflow: "auto",
  border: "1px solid rgba(0,0,0,.25)",
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

type InputFieldWithAutocompleteProps = {
  label: string;
  required?: boolean;
  formProps: UseFormRegisterReturn;
  autoCompleteItems: string[];
  defaultValue: string;
  setValue: UseFormSetValue<FieldValues>;
  note?: string;
  error?: string;
};

const InputFieldWithAutocomplete = React.forwardRef(
  (
    props: InputFieldWithAutocompleteProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const {
      label,
      required,
      formProps,
      autoCompleteItems,
      defaultValue,
      setValue,
      error,
    } = props;
    InputFieldWithAutocomplete.displayName = "InputFieldWithAutocomplete";

    const startingDefaultValue = useMemo(() => defaultValue, []);

    const id = useId();

    const {
      getRootProps,
      getInputProps,
      getListboxProps,
      getOptionProps,
      groupedOptions,
    } = useAutocomplete({
      freeSolo: true,
      id,
      options: autoCompleteItems,
      defaultValue: startingDefaultValue,
      filterOptions: (options, state) => options,
      getOptionLabel: (option) => option,
    });

    useEffect(() => {
      if (getInputProps().value) {
        setValue(formProps.name, getInputProps().value);
      }
    }, [getInputProps().value]);

    return (
      <div className="relative">
        <div {...getRootProps()}>
          <Label id={id} label={label} required={required} />
          <input
            type="text"
            id={id}
            autoComplete="off"
            className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm sm:text-sm ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            {...formProps}
            {...getInputProps()}
          />
        </div>
        {error && <ErrorMessage id={id}>{error}</ErrorMessage>}
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option: any, index) => (
              <li
                key={index}
                {...getOptionProps({ option, index })}
                className="p-2"
              >
                {option as string}
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    );
  }
);

export default InputFieldWithAutocomplete;
