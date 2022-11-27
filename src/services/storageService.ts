import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '@utils';

export class StorageService {
    async setItem(key: STORAGE_KEYS, data: any): Promise<void> {
        await AsyncStorage.setItem(key, JSON.stringify(data))
    }
    async getItem(key: STORAGE_KEYS): Promise<any> {
        return await AsyncStorage.getItem(key)
    }
    async has(key: STORAGE_KEYS): Promise<boolean> {
        const data = await this.getItem(key)
        return Boolean(data)
    }
    async remove(key: STORAGE_KEYS): Promise<void> {
        await AsyncStorage.removeItem(key)
    }
}

// const s = new StorageService()