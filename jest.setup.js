jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next Image Placeholder';
  },
}));
