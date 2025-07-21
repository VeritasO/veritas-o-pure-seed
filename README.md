## Testing & CI/CD

### Running Tests Locally

- **Backend:**  
  `cd server && npm test`

- **Frontend:**  
  `cd client && npm test`

- **With Coverage:**  
  `npm test` (in either directory) will generate a `/coverage` report.

### Accessibility

- We use `eslint-plugin-jsx-a11y` to enforce accessibility best practices in React components.

### Continuous Integration

- All tests run automatically on every push and pull request to `main`/`master` via GitHub Actions.
- See `.github/workflows/test.yml` for workflow details.

### Adding Tests

- Place backend tests in `/server/api/__tests__/`
- Place frontend tests in `/client/__tests__/`
- Use Jest and React Testing Library for frontend, Jest or Vitest for backend.
