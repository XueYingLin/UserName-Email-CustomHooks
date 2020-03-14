import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  const handleChanges = e => {
    // e.target.name === 'email'
    // e.target.value === whatever was typed
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValue);
  };

  return [values, handleChanges, clearForm];
};
