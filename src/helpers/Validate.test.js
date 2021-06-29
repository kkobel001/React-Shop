import { validateRegister, validateLogin, validateEmail } from './Validate';

describe('taskValidatoRegister', () => {
  it('returns valid when the task is properly formatted-null', () => {
    const form = {
      name: null,
      surname: null,
      email: null,
      password: null,
    };
    const result = validateRegister(form);

    expect(result).toEqual({ name: 'Name is required', password: 'Password is not correct', email: 'Email is not correct', surname: 'Surname is required' });
  });

  it('returns valid when the task is properly formatted', () => {
    const form = {
      name: '',
      surname: '',
      email: '',
      password: '',
    };
    const result = validateRegister(form);

    expect(result).toEqual({ name: 'Name is required', password: 'Password is not correct', email: 'Email is not correct', surname: 'Surname is required' });
  });

  it('returns valid when the task is correct', () => {
    const form = {
      name: 'Jan',
      surname: 'Kowalski',
      email: 'jan.kowalski@onet.pl',
      password: 'jankS!owalski1234',
    };
    const result = validateRegister(form);

    expect(result).toEqual({});
  });

  it('returns valid when the name is not correct', () => {
    const form = {
      name: '',
      surname: 'Kowalski',
      email: 'jan.kowalski@onet.pl',
      password: 'jankowalF%ski1234',
    };
    const result = validateRegister(form);

    expect(result).toEqual({ name: 'Name is required' });
  });
  it('returns valid when the name is not correct', () => {
    const form = {
      name: 'Jan',
      surname: '',
      email: 'jan.kowalski@onet.pl',
      password: 'jankoD$walski1234',
    };
    const result = validateRegister(form);

    expect(result).toEqual({ surname: 'Surname is required' });
  });
});

describe('taskValidatoLogin', () => {
  it('returns valid when the task is correct formatted', () => {
    const form = {
      email: '',
      password: '',
    };
    const result = validateLogin(form);

    expect(result).toEqual({ email: 'Email is not correct', password: 'Password is not correct' });
  });
  it('returns valid when the task is properly formatted-null', () => {
    const form = {
      email: null,
      password: null,
    };
    const result = validateLogin(form);

    expect(result).toEqual({ password: 'Password is not correct', email: 'Email is not correct' });
  });
  it('returns valid when the task is correct', () => {
    const form = {
      email: 'jan.kowalski@onet.pl',
      password: 'jankowa!Klski1234',
    };
    const result = validateLogin(form);

    expect(result).toEqual({});
  });
  it('returns invalid when the email is not correct', () => {
    const form = {
      email: 'jan.kowalski@one1//..t.pl',
      password: 'jankowalsk!Ji1234',
    };
    const result = validateLogin(form);

    expect(result).toEqual({ email: 'Email is not correct' });
  });
});

describe('validatePassowrd', () => {
  it('returns invalid when the password doenst have minimum lenght', () => {
    const form = {
      email: 'jan.kowalski@onet.pl',
      password: 'jank',
    };
    const result = validateLogin(form);

    expect(result).toEqual({ password: 'Password is not correct' });
  });
  it('returns invalid when the password doesnt contain symbol', () => {
    const form = {
      email: 'jan.kowalski@onet.pl',
      password: 'jankowalski1234',
    };
    const result = validateLogin(form);

    expect(result).toEqual({ password: 'Password is not correct' });
  });

  it('returns invalid when the password doesnt contain number', () => {
    const form = {
      email: 'jan.kowalski@onet.pl',
      password: 'jankowalsk!i',
    };
    const result = validateLogin(form);

    expect(result).toEqual({ password: 'Password is not correct' });
  });

  it('returns invalid when the password doesnt contain lowercase', () => {
    const form = {
      email: 'jan.kowalski@onet.pl',
      password: 'SDFDSF2!i',
    };
    const result = validateLogin(form);

    expect(result).toEqual({ password: 'Password is not correct' });
  });
  it('returns invalid when the password doesnt contain uppercase', () => {
    const form = {
      email: 'jan.kowalski@onet.pl',
      password: 'dsadsa2!i',
    };
    const result = validateLogin(form);

    expect(result).toEqual({ password: 'Password is not correct' });
  });
});

describe('taskvalidateEmailSyntax', () => {
  it('returns NOT valid when the input is missing @)', () => {
    const improperlyTask = 'jan.kowalskionet.pl';

    const result = validateEmail(improperlyTask);
    expect(result).toEqual({ email: 'Email is not correct' });
  });

  it('returns NOT valid when the input is missing @)', () => {
    const form = {
      email: null,
    };

    const result = validateEmail(form);
    expect(result).toEqual({ email: 'Email is not correct' });
  });
});
