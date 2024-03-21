import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders titles ', () => {
  render(<App />);
  const titleSchemaElement = screen.getByText(/Схема/i);
  const titleAccountElement = screen.getByText(/Аккаунт/i);
  const titleLevelElement = screen.getByText(/Уровень/i);
  const titleBanknotesElement = screen.getByText(/Банкноты/i);
  expect(titleSchemaElement).toBeInTheDocument();
  expect(titleAccountElement).toBeInTheDocument();
  expect(titleLevelElement).toBeInTheDocument();
  expect(titleBanknotesElement).toBeInTheDocument();
});
