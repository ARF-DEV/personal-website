import dayjs from "dayjs";

export function formatDate(date: string): string {
    return dayjs(date).locale('id').format("MMM D, YYYY · H:mm")
}