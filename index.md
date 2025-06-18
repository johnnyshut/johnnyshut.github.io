---
layout: default
title: Главная
---

<div class="hero">
    <div style="display: flex; align-items: center;">
        <img src="/assets/images/1.jpg" alt="Моё фото" style="width: 200px; border-radius: 10px; margin-right: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
        <div class="hero-content">
            <h1>Карло Иван</h1>
            <h2>Developer, DevOps-engineer, System Analyst, Software Architect, Solution Architect</h2>
            <p class="hero-description">Эксперт в области информационных технологий, разработки, автоматизации и цифровой трансформации бизнеса на платформе 1С</p>
        </div>
    </div>
</div>

<section class="skills">
    <h2>Мои компетенции</h2>
    <div class="skills-grid">
        <div class="skill-card">
            <h3>1С:Предприятие</h3>
            <p>Разработка, доработка и поддержка конфигураций</p>
        </div>
        <div class="skill-card">
            <h3>Интеграции</h3>
            <p>REST API, Web-сервисы, обмен данными</p>
        </div>
        <div class="skill-card">
            <h3>Автоматизация</h3>
            <p>Оптимизация бизнес-процессов</p>
        </div>
    </div>
</section>

{% include about.html %}

{% include projects.html %}

{% include contacts.html %}
