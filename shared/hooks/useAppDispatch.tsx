import type { AppDispatch } from '@/app/store.tsx';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
