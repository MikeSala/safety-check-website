import clsx from "clsx";
import React, { LegacyRef, useCallback, useId } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import ErrorMessage from "~/components/ErrorMessage";
import { Label } from "~/components/Fields/Label";
import { blobToBase64 } from "~/utils/blob";
import { errorToast } from "~/utils/toast";

type StyledDropzoneProps = {
  formProps: UseFormRegisterReturn;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  control?: Control;
  error?: string;
  className?: string;
};

export const StyledDropzone = React.forwardRef(
  (
    {
      formProps,
      setValue,
      error,
      watch,
      control,
      className,
    }: StyledDropzoneProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    StyledDropzone.displayName = "StyledDropzone";

    const onDrop = useCallback(
      async (acceptedFiles: File[]) => {
        try {
          const base64File = await blobToBase64(acceptedFiles[0]);
          setValue(
            "fileContent",
            base64File.replace("data:application/pdf;base64,", "")
          );
          setValue("fileName", acceptedFiles[0].name);
        } catch (e) {
          console.log(e);
        }
      },
      [setValue]
    );

    const onDropRejected = useCallback((_fileRejections: FileRejection[]) => {
      errorToast(
        "Przesyłanie nie powiodło się, prześlij proszę plik .pdf lub .docx mniejszy niż 3MB."
      );
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      onDropRejected,
      accept: {
        "application/pdf": [".pdf"],
        "application/msword": [".doc", ".docx"],
      },
      multiple: false,
    });

    const handleDelete = () => {
      setValue("fileContent", null);
      setValue("fileName", null);
    };

    const fileName = watch("fileName");

    const id = useId();

    return (
      <div ref={ref} className={className}>
        {fileName ? (
          <div className="flex gap-4">
            {fileName}
            <button className="font-medium text-red-500" onClick={handleDelete}>
              Delete
            </button>
          </div>
        ) : (
          <>
            <Label id={id} label="CV" required />
            <div {...getRootProps()} className="rounded">
              <div
                className={clsx(
                  "flex w-full cursor-pointer items-center justify-center rounded-md border-2 py-4 text-gray-500",
                  error
                    ? "border-red-500"
                    : isDragActive
                    ? "border-primary-600 bg-neutral-100"
                    : "border-gray-300 bg-neutral-50"
                )}
              >
                {
                  <p className="p-4">
                    <strong>Kliknij by wybrać plik</strong> lub przeciągnij
                    tutaj CV (PDF, DOCX - 3MB maximum)
                  </p>
                }
              </div>
              <Controller
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    {...getInputProps()}
                    id={id}
                    onChange={onChange}
                    className="absolute inset-0 h-full w-full opacity-0 outline-none"
                  />
                )}
                {...formProps}
              />
            </div>
          </>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
);
