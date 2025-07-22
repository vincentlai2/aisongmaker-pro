import { generateMetadata } from "@/components/seo-head"
import ClientPage from "./ClientPage"

export const metadata = generateMetadata()

export default function Homepage() {
  return <ClientPage />
}
