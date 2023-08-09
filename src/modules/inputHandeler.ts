type FormEvents = React.FormEvent<HTMLInputElement | HTMLTextAreaElement>;

export const handleInput = (handle: (value: string) => void) => {
  const formEvents = (event: FormEvents) => {
    handle(event.currentTarget.value);
  };

  return formEvents;
};
