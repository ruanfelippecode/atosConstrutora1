import "./RedesSociais.css";

const RedesSociais = () => {
  const ListaRedes = [
    {
      id: 1,
      urlNome: "Portfólio",
      url: "https://drive.google.com/file/d/1kXd-ZSN1CZD0lNCkv58___1B8wevhzKs/view?usp=drive_link",
    },
    {
      id: 2,
      urlNome: "Instagram",
      url: "https://www.instagram.com/atosconstrucaoereforma/",
    },
    {
      id: 3,
      urlNome: "Entre em Contato!",
      url: "https://wa.me/5567991329953?text=Gostaria%20de%20fazer%20um%20orçamento!%20",
    },
  ];

  const LinksRedes = ListaRedes.map((props) => (
    <div key={props.id} className="conteudo_links">
      <a href={props.url}>{props.urlNome}</a>
    </div>
  ));

  return <>{LinksRedes}</>;
};
export default RedesSociais;
