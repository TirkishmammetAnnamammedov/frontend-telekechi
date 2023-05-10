import React from "react";
import Footer from "../../../component/footer/footer";
import Navbar from "../../../component/navbar/navbar";
import RouteList from "../../../component/topRouteList/routeList";
import "./rule.scss";
import MultiLingualContext from "../../../context/multiLingualContext";

const Rule = () => {
    return (
        <div className="rule">
            <Navbar />
            <div className="ruleContent">
                <RouteList main="Baş sahypa" categoryName="Biz barada" products="Maglumat goýmak düzgünleri" />
                <div className="ruleArea">
                    <h2><MultiLingualContext contentId='rule_text'></MultiLingualContext></h2>
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

export default Rule;