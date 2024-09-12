import AsyncStorage from "@react-native-async-storage/async-storage";


const SaveToken = async (name, token) => {
    try {
        const savedToken = await AsyncStorage.setItem(name, token)
        return savedToken
    } catch (error) {
        return (0);
    }
}

const GetToken = async (name) => {
    try {
        const token = AsyncStorage.getItem(name);
        return token
    } catch (error) {
        return (0)
    }
}

const RemoveToken = async (name) => {
    try {
        const token = AsyncStorage.removeItem(name)
        return token
    } catch (error) {
        return (0)
    }
}

export {
    SaveToken,
    GetToken,
    RemoveToken
}