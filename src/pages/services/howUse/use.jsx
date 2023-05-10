import React from "react";
import Footer from "../../../component/footer/footer";
import Navbar from "../../../component/navbar/navbar";
import RouteList from "../../../component/topRouteList/routeList";
import "./use.scss";
import MultiLingualContext from "../../../context/multiLingualContext";

const Use = () => {
    return (
        <div className="use">
            <Navbar />
            <div className="useContent">
                <RouteList main="Baş sahypa" categoryName="Biz barada" products="Nädip ulanmaly" />
                <div className="useArea">
                    <h2><MultiLingualContext contentId='use_text'></MultiLingualContext></h2>
                    <ol>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab earum libero
                            molestias tenetur quis nostrum harum numquam! Esse,
                            asperiores officiis quasi soluta veritatis accusamus modi distinctio
                            voluptatem dicta cumque doloremque.lorem Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Minima distinctio facere at sit nam
                            cupiditate voluptas animi soluta iusto molestias. Alias corrupti impedit, dolorum
                            fugit quo odit ducimus est totam.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab earum libero
                            molestias tenetur quis nostrum harum numquam! Esse,
                            asperiores officiis quasi soluta veritatis accusamus modi distinctio
                            voluptatem dicta cumque doloremque.lorem Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Minima distinctio facere at sit nam
                            cupiditate voluptas animi soluta iusto molestias. Alias corrupti impedit, dolorum
                            fugit quo odit ducimus est totam.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab earum libero
                            molestias tenetur quis nostrum harum numquam! Esse,
                            asperiores officiis quasi soluta veritatis accusamus modi distinctio
                            voluptatem dicta cumque doloremque.lorem Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Minima distinctio facere at sit nam
                            cupiditate voluptas animi soluta iusto molestias. Alias corrupti impedit, dolorum
                            fugit quo odit ducimus est totam.</p>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab earum libero
                            molestias tenetur quis nostrum harum numquam! Esse,
                            asperiores officiis quasi soluta veritatis accusamus modi distinctio
                            voluptatem dicta cumque doloremque.lorem Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Minima distinctio facere at sit nam
                            cupiditate voluptas animi soluta iusto molestias. Alias corrupti impedit, dolorum
                            fugit quo odit ducimus est totam.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab earum libero
                            molestias tenetur quis nostrum harum numquam! Esse,
                            asperiores officiis quasi soluta veritatis accusamus modi distinctio
                            voluptatem dicta cumque doloremque.lorem Lorem ipsum dolor sit amet consectetur</p>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab earum libero
                            molestias tenetur quis nostrum harum numquam! Esse,
                            asperiores officiis quasi soluta veritatis accusamus modi distinctio
                            voluptatem dicta cumque doloremque.lorem Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Minima distinctio facere at sit nam
                            cupiditate voluptas animi soluta iusto molestias. Alias corrupti impedit, dolorum
                            fugit quo odit ducimus est totam.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab earum libero
                            molestias tenetur quis nostrum harum numquam! Esse,
                            asperiores officiis quasi soluta veritatis accusamus modi distinctio
                            voluptatem dicta cumque doloremque.lorem Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Minima distinctio facere at sit nam
                            cupiditate voluptas animi soluta iusto molestias. Alias corrupti impedit, dolorum
                            fugit quo odit ducimus est totam.</p>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Use;