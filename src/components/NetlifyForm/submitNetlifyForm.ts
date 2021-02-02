export function submitNetlifyForm({
  formId,
}: {
  readonly formId: string;
}): Promise<void | Response> {
  const myForm: any = document.getElementById(formId);
  const formData: any = new FormData(myForm);

  // eslint-disable-next-line functional/no-expression-statement
  return fetch("/", {
    method: "POST",
    body: new URLSearchParams(formData).toString(),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
}
