// Method to create a new team
export default defineEventHandler((event) => {
  console.log("Received event: " + event);
  let sessie: any = event.context.session;
  return sessie;
});
