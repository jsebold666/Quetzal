import React from 'react';
import './index.scss';
import Sidebar from '../../../components/common/sidebar/index.jsx';
import HeadLess from '../../../components/common/headLess/index.jsx';
import Subtitle from '../../../components/common/subtitle/index.jsx';
import Textarea from '../../../components/common/text-area/index.jsx';

export default ( props ) => (
    <div>
        <div className='lesson'>
        <HeadLess />
        <Sidebar />
            <div className='content'>
                <Subtitle text = { `T1 - Matemáticas Básicas - Fracciones` }/>
                <Textarea text = { `En matemáticas, una fracción, número fraccionario, es la expresión de una cantidad dividida entre otra cantidad; es decir que representa un cociente no efectuado de números. Por razones históricas también se les llama fracción común, fracción vulgar o fracción decimal. Las fracciones comunes se componen de: numerador, denominador y línea divisora entre ambos (barra horizontal u oblicua). En una fracción común a/b el denominador "b" expresa la cantidad de partes iguales que representan la unidad, y el numerador "a" indica cuántas de ellas se toman.` }/>
                <Textarea text = { `El conjunto matemático que contiene a las fracciones de la forma a/b, donde a y b son números enteros y b≠0 es el conjunto de los números racionales.` }/>
                <Textarea text = { `De manera más general, se puede extender el concepto de fracción a un cociente cualquiera de expresiones matemáticas (no necesariamente números).` }/>
                <Textarea text = { `Una fracción simple (también conocida como fracción común o fracción vulgar) es un número racional de la forma a/b, donde a y b son números enteros y b≠0. Puesto que una fracción común representa un número racional, las fracciones comunes heredan todas las propiedades matemáticas de los racionales. Ejemplo 3/4; (¾); fracción tres cuartos: numerador 3 y denominador 4, representa al número decimal 0.75, en porcentaje: 75%.` }/>
                <Textarea text = { `Las fracciones comunes pueden clasificarse en propias e impropias. Una fracción propia es aquella en la que, si el numerador y el denominador son positivos, el numerador es menor que el denominador, por ejemplo 3/4, 3/8, 1/3. Por el contrario, una fracción impropia será la fracción en donde el numerador es mayor que el denominador, por ejemplo 13/6, 18/8, 5/2. En general, una fracción común es una fracción propia si el valor absoluto es estrictamente menor que uno — es decir, si la fracción es mayor que −1 y menor que 1 —.` }/>
                <Textarea text = { `Una fracción mixta o número mixto es la representación de una fracción impropia, en forma de número entero y fracción propia; es una manera práctica de escribir unidades de medida (peso, tiempo, capacidad), recetas de cocina, etc.` }/>
            </div>
        </div>
    </div>
)