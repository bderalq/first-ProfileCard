import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
     <View style = {styles.card}>
<Image
source = {{
  uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  }}
  width={100}
  height={100}
  borderRadius={120}
      />
<Text style={styles.greeting}>Bader Alqallaf</Text>
<Text style = {styles.city}>Liverpool</Text>
<Text style={styles.line}>__________________________________</Text>
<View style = {styles.infotwo}>

<View style ={styles.info}>
<Text style = {styles.following}>80K </Text>
<Text style ={styles.info}>Followers</Text>
</View>

<View style ={styles.info}>
<Text style = {styles.following}>803K </Text>
<Text style ={styles.info}>Likes</Text>
</View>

<View style ={styles.info}>
<Text style = {styles.following}>1.4K </Text>
<Text style ={styles.info}> Photos</Text>
</View>

</View>


     </View>

      <StatusBar style="auto" />
    </View> 

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    fontSize: 20,
    fontWeight:"bold",
    marginTop:10,
    marginBottom:4
  },
  input:{
    borderWidth:2,
    padding: 35,
    width:300
  },
  card: {
    backgroundColor: "#188",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: 300,
    height: 300
  },
  city:{
    fontSize: 17,
    fontWeight:"",
    marginTop:1,
    // marginBottom:1,
    color:"#444"
  },
  line:{
    height : 30,
    color:"#444"
  },
  following:{
    merginTop:40,
    fontSize:20,
    fontWeight: "bold",
  },
  info :{
    alignItems: "center",
    //flex: 1,
    justifyContent: "center",
  },
  infotwo:
  {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    flexWrap : "wrap-reverse",
    width: '100%',
  }

});
