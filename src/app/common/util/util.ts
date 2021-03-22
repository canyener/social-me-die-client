export const combineDateAndTime = (date: Date, time: Date): Date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const dateString = `${year}-${month}-${day}`
  const timeString =`${time.getHours()}:${time.getMinutes()}:00` 

  return new Date(`${dateString}' '${timeString}`)
}