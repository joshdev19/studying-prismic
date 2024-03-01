import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { createClient } from '@/prismicio'
import { PrismicLink } from '@prismicio/react';

export async function generateMetadata() {
  const client = createClient();
  const homePage = await client.getSingle('homepage');

  return {
    title: homePage.data.title,
    description: homePage.data.meta_description,
  }
}

export default async function Main () {

    const client = createClient();

    const datas = await client.getSingle('settings');
    const homepage = await client.getSingle('homepage');

    console.log(datas.data.og_image.url)

    return (
      <>
        <Header/>
          <table className='w-100% border-collapse mx-auto'>
            <thead>
              <tr>
                <th className='border p-5'> Title </th>
                <th className='border p-5'> Description </th>
                <th className='border p-5'> OG Image </th>
                <th className='border p-5'> Navigations </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-5'> { datas.data.site_title } </td>
                <td className='border p-5'> { datas.data.meta_description } </td>
                <td className='border p-5'> { datas.data.og_image.url } </td>
                <td className='border p-5'>
                  <ul>
                    {
                      datas.data.navigation.map( (n, i) => {
                        return (
                          <li key={i}>
                            <PrismicLink field={n?.link}> { n?.label } </PrismicLink>
                          </li>
                        ) 
                      })
                    }
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        <Footer/>
      </>
    )

}