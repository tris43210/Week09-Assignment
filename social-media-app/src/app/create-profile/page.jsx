import { db } from "@/utils/connect"
import { auth } from "@clerk/nextjs/server"

export default async function CreateProfile() {
    const {userid} = await auth();

    async function handleSubmit(formData) {
        `use server` 
        const submitData = await db.query(`INSERT INTO userAcccounts (clerkid, username, userbio) VALUES ($1, $2, $3)`, [])
    }
  

    return(
        <main>
            <form action={handleSubmit}>
                <input type="text" name="username"/>
                <input type="text" name="username"/>
                <button type="submit">Create Profile</button>
            </form>
        </main>
    )
}