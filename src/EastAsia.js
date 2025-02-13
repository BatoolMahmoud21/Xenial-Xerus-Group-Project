import React from 'react';
import './EastAsian.css';

function EastAsia() {
  return (
    <div className="EastAsia">
      <header className="page-header">
        <button className="home-button" onClick={() => alert('Home clicked')}>
          Home
        </button>
        <h1 className="header">East Asian Populations</h1>
      </header>

      <div className="country-list">
        <h2>China (Han Chinese Population)</h2>
        <p>China, with one of the largest populations in the world, is experiencing a growing prevalence of Type 2 diabetes (T2D), particularly in urban areas. The country faces a significant health challenge as more people adopt sedentary lifestyles and high-calorie diets, contributing to increased rates of obesity and insulin resistance.</p>

        <p>Genetic studies have identified several key single nucleotide polymorphisms (SNPs) associated with an increased risk of T2D in the **Han Chinese** population. Notably, the following SNPs have been shown to influence the risk of developing Type 2 diabetes:</p>

        <h2>Japan</h2>
        <p>The Japanese population, like other East Asian populations, has witnessed a rising number of Type 2 diabetes cases. This has become a significant health concern, exacerbated by shifts in diet and lifestyle. Similar to the Han Chinese, genetic predisposition plays an important role in T2D susceptibility in the Japanese population.</p>

        <p>
          Several SNPs have been identified in the Japanese population that are associated with Type 2 diabetes risk:
        </p>

        <h2>South Korea</h2>
        <p>South Korea has seen a rapid increase in the incidence of Type 2 diabetes, particularly in urban areas where changes in diet, lifestyle, and physical activity levels have contributed to the rise in cases. South Korea's genetic research has been pivotal in identifying SNPs linked to Type 2 diabetes susceptibility in its population.</p>

        <p>
          Several SNPs have been identified in the South Korean population that are associated with Type 2 diabetes risk:
        </p>

      </div>
    </div>
  );
}

export default EastAsia;
