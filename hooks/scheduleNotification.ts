import * as Notifications from "expo-notifications";

export interface NotificationsParams {
  title?: string | null | undefined;
  body?: string | null | undefined;
  data?: Record<string, any> | undefined;
}

export const schedulePushNotification = async (
  notificationParams: NotificationsParams
) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: notificationParams.title,
      body: notificationParams.body,
      data: notificationParams.data,
    },
    trigger: null,
  });
};

//data --->  data: { data: "goes here", test: { test1: "more data" } }
