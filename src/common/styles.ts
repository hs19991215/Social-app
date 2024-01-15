import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 600,
    width: "92%",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  homeTabs: {
    width: "46%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 15,
    margin: 8,
    borderColor: COLORS.grey,
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 8,
    backgroundColor: COLORS.white,
  },
  cards: {
    width: "90%",
    alignSelf: "center",
    padding: "4%",
    borderRadius: 15,
    marginVertical: 9,
    borderColor: COLORS.grey,
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 4,
    backgroundColor: COLORS.white,
  },
  flexRow: {
    flexDirection: "row",
  },
  marginTop10: {
    marginTop: 10,
  },
  hardText: {
    fontFamily: "OpenSans-Bold",
    color: COLORS.black,
    fontSize: 16,
  },
  softText: {
    fontFamily: "OpenSans-Bold",
    color: COLORS.grey,
    fontSize: 16,
  },
  markerInnerContainer: {
    backgroundColor: COLORS.white,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  alignSelfCenterr: { alignSelf: "center" },
  cardContainer: {
    width: "90%",
    borderColor: COLORS.grey,
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 8,
    backgroundColor: COLORS.white,
    borderRadius:8,
    alignSelf:"center",
    marginTop:"5%",
    padding:"5%"
  },
  profileCircle:{
    width:100,
    height:100,
    borderRadius:100,
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 8,
    backgroundColor: COLORS.white,
  },box1:{
    width:"65%"
  },
  alignItemCenter:{
    alignItems: "center",
  },
  justifyBetween:{
    justifyContent:"space-between"
  },
  width90:{
    width:"90%",
    alignSelf:"center"
  }
});
