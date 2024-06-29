import { auth, signInWithEmailAndPassword, signOut } from "./firebase-config.js";

class Authservices {
    static async login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (userCredential == null) {
                return;
            }
            
            console.log("Giriş Yapıldı");
            return userCredential.user;
            
        } catch (error) {
            console.error("Error logging in:", error);
            throw error; // Rethrow error for the caller to handle
        }
    }

    static async logout() {
        try {
            await signOut(auth);
            return true; // Successfully logged out
        } catch (error) {
            console.error("Error logging out:", error);
            throw error; // Rethrow error for the caller to handle
        }
    }
}

export default Authservices;
