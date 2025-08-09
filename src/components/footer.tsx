import { Separator } from "~/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Produto",
    links: [
      {
        title: "Funcionalidades",
        href: "#features",
      },
      {
        title: "Como Funciona",
        href: "#",
      },
      {
        title: "Preços",
        href: "#pricing",
      },
      {
        title: "Depoimentos",
        href: "#testimonials",
      },
      {
        title: "FAQ",
        href: "#faq",
      },
      {
        title: "Atualizações",
        href: "#",
      },
    ],
  },
  {
    title: "Empresa",
    links: [
      {
        title: "Sobre Nós",
        href: "#",
      },
      {
        title: "Nossa Missão",
        href: "#",
      },
      {
        title: "Carreiras",
        href: "#",
      },
      {
        title: "Imprensa",
        href: "#",
      },
      {
        title: "Contato",
        href: "#",
      },
      {
        title: "Parceiros",
        href: "#",
      },
    ],
  },
  {
    title: "Educação",
    links: [
      {
        title: "Blog Financeiro",
        href: "#",
      },
      {
        title: "Glossário",
        href: "#",
      },
      {
        title: "Cursos Gratuitos",
        href: "#",
      },
      {
        title: "E-books",
        href: "#",
      },
      {
        title: "Webinars",
        href: "#",
      },
      {
        title: "Newsletter",
        href: "#",
      },
    ],
  },
  {
    title: "Suporte",
    links: [
      {
        title: "Central de Ajuda",
        href: "#",
      },
      {
        title: "WhatsApp Suporte",
        href: "#",
      },
      {
        title: "Comunidade",
        href: "#",
      },
      {
        title: "Status do Sistema",
        href: "#",
      },
      {
        title: "Relatar Bug",
        href: "#",
      },
      {
        title: "Política de Privacidade",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-screen-xl px-6 py-16 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="text-2xl font-bold">Dalio AI</div>

            <p className="text-muted-foreground mt-4 max-w-md">
              Assessor de investimentos de IA que ajuda a Geração Z brasileira a
              conquistar a liberdade financeira, direto no WhatsApp 🚀
            </p>
          </div>

          {/* {footerSections.map(({ title, links }) => (
            <div key={title} className="xl:justify-self-end">
              <h6 className="font-semibold text-foreground">{title}</h6>
              <ul className="mt-6 space-y-4">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-[#6a8fdb] transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </div>
      <Separator />
      <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row">
        {/* Copyright */}
        <span className="text-muted-foreground xs:text-start text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Dalio AI</span>. Todos os direitos
          reservados.
        </span>

        <div className="text-muted-foreground flex items-center gap-5">
          {/* <Link
            href="#"
            target="_blank"
            className="hover:text-[#6a8fdb] transition-colors"
          >
            <TwitterIcon className="h-5 w-5" />
          </Link> */}
          <Link
            href="https://www.instagram.com/dalio_ai/"
            target="_blank"
            className="transition-colors hover:text-[#6a8fdb]"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
          {/* <Link
            href="#"
            target="_blank"
            className="hover:text-[#6a8fdb] transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="hover:text-[#6a8fdb] transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
