type FormEvents = React.FormEvent<HTMLInputElement | HTMLTextAreaElement>;

export const handleInput = (handle: (value: string) => void) => {
  const formEvents = (event: FormEvents) => {
    try {
      handle(event.currentTarget.value);
    } catch (error) {
      console.log(error);
    }
  };

  return formEvents;
};
