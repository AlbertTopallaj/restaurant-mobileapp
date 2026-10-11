import {Alert, Platform} from "react-native";

   export function leaveWarning(func) {
     Alert.alert(
       'Lämna appen?',
       'Du håller på att lämna appen. Är du säker?',
       [
         { text: "Stanna", style: 'cancel', onPress: () => {} },
         {
           text: 'Lämna',
           style: 'destructive',
           onPress: () => func(),
         },
       ]
     );
   }
