// eventBus.ts
import mitt from "mitt";

type Events = {
  // تعریف رویدادها و پارامترهای آنها
  selectLatLng: { lat: string; lng: string };
  selectImg: { name: string; src: string };
  // سایر رویدادها
};

export const EventBus = mitt<Events>();
