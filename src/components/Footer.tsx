import { createClient } from "@/prismicio"

export default async function Footer () {

    const client = createClient();

    const data = await client.getSingle("settings")

    return <footer> This is the footer </footer>

}
