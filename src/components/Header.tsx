import { createClient } from "@/prismicio"
import Link from "next/link";

export default async function Header () {

    const client = createClient();

    const settings = await client.getSingle('settings');

    return (
        <header>
            { settings.data.site_title }

            <nav>
                <ul>
                    {
                        settings && settings.data.navigation.map( (n, i) => {
                            return (
                                <li key={i}>
                                    <Link href={n?.link}>
                                        { n.label }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )

}