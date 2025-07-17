import { ApolloError } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useRef } from "react";

type WorkApplicationLastStepMessageProps = {
  error?: ApolloError;
};

const WorkApplicationLastStepMessage = ({
  error,
}: WorkApplicationLastStepMessageProps) => {
  // TODO:  temporary solution until scrolling on Next will be implemented
  // FROM HERE
  const formRef = useRef(null);
  const scrollIntoViewOptions = {
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  };
  const scrollToForm = () =>
    // @ts-ignore
    formRef?.current?.scrollIntoView(scrollIntoViewOptions);

  useEffect(() => {
    scrollToForm();
  }, []);
  // TO HERE

  return (
    <div className="mt-4 flex flex-shrink justify-center" ref={formRef}>
      <Card sx={{ boxShadow: 0 }}>
        <CardContent>
          <div className="w-full sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white py-2 text-center">
              {!error ? (
                <>
                  <p className={"text-2xl font-medium"}>
                    Thank you for the interest in joining us and taking your
                    time submitting your application!
                  </p>
                  <p>
                    We will contact you if we have a suitable position for you.
                  </p>
                </>
              ) : (
                <>
                  <p className={"text-2xl font-medium"}>Error!</p>
                  <p>
                    Something went wrong. Please try again later or send email
                    directly to info@przegladinstalacji.pl
                  </p>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkApplicationLastStepMessage;
