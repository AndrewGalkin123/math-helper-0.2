"use client";

import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import styles from "./MathApplications.module.css";

const MathematicsInDifferentAreas = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "#333" }}>Применение Математики</h1>
      <br></br>

      <section className={styles.mathBlock}>
        <h2>Математика в физике</h2>
        <p>
          Математика играет ключевую роль в физике, помогая моделировать и
          описывать физические явления. Вот несколько примеров:
        </p>
        <ul>
          <li>
            <strong>Кинематика и динамика:</strong>
            <ul>
              <li>
                Уравнения движения: <BlockMath math="v = v_0 + at" />,{" "}
                <BlockMath math="s = v_0t + \frac{1}{2}at^2" />
              </li>
              <li>
                Законы Ньютона: <BlockMath math="F = ma" />
              </li>
            </ul>
          </li>
          <li>
            <strong>Электродинамика:</strong>
            <ul>
              <li>
                Закон Кулона: <BlockMath math="F = k \frac{q_1 q_2}{r^2}" />
              </li>
              <li>
                Уравнения Максвелла: набор уравнений, описывающих
                электромагнитные поля
              </li>
            </ul>
          </li>
          <li>
            <strong>Квантовая механика:</strong>
            <ul>
              <li>
                Уравнение Шрёдингера:{" "}
                <BlockMath math="i\hbar \frac{\partial \psi}{\partial t} = \hat{H} \psi" />
              </li>
              <li>Принципы квантовой суперпозиции и запутанности</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.mathBlock}>
        <h2>Математика в экономике</h2>
        <p>
          Экономика широко использует математические методы для анализа данных,
          моделирования экономических процессов и прогнозирования:
        </p>
        <ul>
          <li>
            <strong>Микроэкономика:</strong>
            <ul>
              <li>
                Теория спроса и предложения: анализ кривых спроса и предложения,
                равновесие
              </li>
              <li>
                Теория полезности: <InlineMath math="U(x, y)" /> — функция
                полезности для двух товаров
              </li>
            </ul>
          </li>
          <li>
            <strong>Макроэкономика:</strong>
            <ul>
              <li>
                Модели экономического роста: модель Солоу,{" "}
                <BlockMath math="Y = A K^\alpha L^{1-\alpha}" />
              </li>
              <li>
                Кейнсианские модели: анализ совокупного спроса и совокупного
                предложения
              </li>
            </ul>
          </li>
          <li>
            <strong>Финансовая математика:</strong>
            <ul>
              <li>
                Модели оценки опционов: модель Блэка-Шоулза,{" "}
                <BlockMath math="C = S_0 N(d_1) - X e^{-rt} N(d_2)" />
              </li>
              <li>
                Управление рисками: VAR (Value at Risk), стресс-тестирование
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.mathBlock}>
        <h2>Математика в информатике</h2>
        <p>
          Математика является основой для многих алгоритмов и методов,
          используемых в информатике:
        </p>
        <ul>
          <li>
            <strong>Алгоритмы и структуры данных:</strong>
            <ul>
              <li>
                Сортировка: алгоритмы сортировки, такие как быстрая сортировка (
                <InlineMath math="O(n \log n)" />) и сортировка слиянием (
                <InlineMath math="O(n \log n)" />)
              </li>
              <li>
                Поиск: бинарный поиск (<InlineMath math="O(\log n)" />)
              </li>
            </ul>
          </li>
          <li>
            <strong>Теория чисел и криптография:</strong>
            <ul>
              <li>
                Простые числа: генерация и проверка простых чисел, важные для
                криптографии
              </li>
              <li>
                Шифрование: алгоритмы RSA, AES, DH, используемые для безопасной
                передачи данных
              </li>
            </ul>
          </li>
          <li>
            <strong>Машинное обучение и искусственный интеллект:</strong>
            <ul>
              <li>
                Регрессия и классификация: линейная регрессия, логистическая
                регрессия, SVM
              </li>
              <li>
                Нейронные сети: основы построения и обучения нейронных сетей,
                функция активации, обратное распространение ошибки
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MathematicsInDifferentAreas;
