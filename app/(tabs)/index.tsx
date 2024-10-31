import { Button, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { configurePushNotifications } from "@/hooks/usePushNotification";
import { schedulePushNotification } from "@/hooks/scheduleNotification";
import WheelchairDiagramContainer from "@/components/angle_display/WheelChairDiagramContainer";

const App = () => {
  configurePushNotifications();

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 100,
          display: "flex",
          alignItems: "center",
          gap: 30,
        }}
      >
        {/* <ThemedText type="title">{count}</ThemedText> */}
        <View style={{ gap: 30, display: "flex", flexDirection: "row" }}>
          {/* <Button
            onPress={() => setCount(count + 1)}
            title="Add"
            color="#841584"
          />
          <Button onPress={() => setCount(0)} title="Reset" color="#841584" /> */}
          <Button
            onPress={async () => {
              schedulePushNotification({
                title: "Reminder",
                body: "Reminder to perform pressure releif!",
              });
            }}
            title="Notify"
            color="#0a7ea4"
          ></Button>
        </View>
        <WheelchairDiagramContainer></WheelchairDiagramContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

export default App;
