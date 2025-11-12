export const  validateEmail = (emailAddress: string) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailAddress.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }