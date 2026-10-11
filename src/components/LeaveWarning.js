import {Alert, Platform} from "react-native";

   export function leaveWarning(func) {
     Alert.alert(
       'Leave app?',
       'You are about to exit the app. Are you sure?',
       [
         { text: "Stay", style: 'cancel', onPress: () => {} },
         {
           text: 'Leave',
           style: 'destructive',
           onPress: () => func(),
         },
       ]
     );
   }
