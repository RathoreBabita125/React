const conf={
    appwriteURL:String(import.meta.env.VITE_APPWRITE_URL),
    appwritePojectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDtabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;