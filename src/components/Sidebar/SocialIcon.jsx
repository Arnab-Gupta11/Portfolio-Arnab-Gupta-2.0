import { FaFacebook } from "react-icons/fa"
import { RiWhatsappFill, RiLinkedinBoxFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import useResponsiveIconSize from "../../hooks/useResponsiveIconSize"

const SocialIcon = () => {
  const iconSize = useResponsiveIconSize();
  const scialInfo = [
    {
      Icon: IoLogoGithub,
      links: "https://github.com/Arnab-Gupta11"
    },
    {
      Icon: RiLinkedinBoxFill,
      links: "https://www.linkedin.com/in/arnabgupta11/"
    },
    {
      Icon: FaFacebook,
      links: "https://www.facebook.com/profile.php?id=61555403230011"
    },
    {
      Icon: RiWhatsappFill,
      links: "https://wa.me/+8801793109660"
    }
  ]
  return (
    <div className="flex items-center justify-center gap-4 mt-5 2xl:mt-4">
      {
        scialInfo.map((info, index) => {
          const { Icon, links } = info;
          return (
            <a key={index} href={links} target="_blank" rel="noopener noreferrer">
              <button
                className="rounded-lg inline-flex justify-center items-center p-1.5 xsm:p-2.5 2xl:p-3.5 w-8 h-8 xs:w-10 xs:h-10 2xl:w-12 2xl:h-12 text-[#f0f2f5] hover:text-[#9C6FF8] hover:border-[#9C6FF8] shadow-social-btn-shadow hover:shadow-lg hover:shadow-[#8750f733] bg-transparent group hover:-translate-y-2 hover:scale-105 active:scale-90 duration-700"
              >
                <Icon size={iconSize} className="text-[#64748B] group-hover:text-primary-100" />
              </button>
            </a>
          )
        })
      }
    </div>
  )
}

export default SocialIcon
