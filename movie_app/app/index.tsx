import { Text, View } from "react-native";
import CustomIcon from "@/components/CustomIcon";
import { upComingMovies,popularMovies,searchMovies } from "@/api/apicalls";
export default function Index() {
  console.log(searchMovies('Avengers'));
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <CustomIcon name='search' size={25} />
      
    </View>
  );
}
