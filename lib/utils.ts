import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from 'sonner';
import { AxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const displayErrorMessage = (errorData: AxiosError<any>, toastId?: string | number) => {
  if (errorData.message === "Network Error") {
    toast.error("Please check your internet connection");

    return;
  }

  const {message} = errorData.response?.data || {};

  toast.error(capitalizeFirstLetter(message), {
    id: toastId ?? "",
  });
};

export function getFirstLetter(string = "") {
  return string.charAt(0);
}

export function capitalizeFirstLetter(string = "") {
  string = String(string);

  return getFirstLetter(string)?.toUpperCase() + string.toLowerCase()?.slice(1);
}

export function showSuccess(message: string){
  toast.success(message);
}

export function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = 'Good morning!';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon!';
  } else if (hour >= 18 && hour < 22) {
    greeting = 'Good evening!';
  } else {
    greeting = 'Good night!';
  }

  return greeting;
}

export function getDateSevenDaysAgo() {
  const today = new Date();
  const sevenDaysAgo = new Date(today); 

  sevenDaysAgo.setDate(today.getDate() - 7);

  return sevenDaysAgo;
}