import Hero from "@/app/components/sections(widgets)/Hero"
import CoreTrack from "@/app/components/sections(widgets)/CoreTrack"
import SpecializedTrack from "@/app/components/sections(widgets)/SpecializedTrack"


export default function Home() {
  return (
  <>
  <main>
    {/* //Hero Section  */}
    <Hero/>
    {/* //Core Track Section  */}
    <CoreTrack/>
    {/* Specialized Track Section */}
    <SpecializedTrack/>

  </main>
  </>
  )
}
