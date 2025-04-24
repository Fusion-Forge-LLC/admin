import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from 'sonner';
import { AxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ErrorType = {
  message: string;
  response?: {
    data?: {
      message?: string
    }
  }
}
export const displayErrorMessage = (errorData: AxiosError<ErrorType>, toastId?: string | number) => {
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

  if (hour >= 0 && hour < 12) {
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

export function updateUrl(
  param: string,
  value: number | string,
  removeItems?: string[]
) {
  if (typeof window === "undefined") return "";

  const parsedUrl = new URL(window.location.href);

  parsedUrl.searchParams.set(param, value.toString());

  removeItems?.map((item) => {
    parsedUrl.searchParams.delete(item);
  });

  return parsedUrl.toString();
}

export function formatDate(date: string | Date){
  return new Date(date).toLocaleDateString('en-US', {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })
}

export function formatCurrency(amount: number){
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getDuration(from: string | Date, to: string | Date){
  const startDate = new Date(from).toLocaleDateString('en-US', {
    day: "2-digit",
    month: "short",
  })

  const endDate = new Date(to).toLocaleDateString('en-US', {
    day: "2-digit",
    month: "short",
  })

  return `${startDate} - ${endDate} `;
}

export function formatDateShort(date: string | Date){
  return new Date(date).toLocaleDateString('en-US', {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })
}