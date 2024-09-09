import { readFileSync, writeFileSync } from 'fs';

export const lerArquivo = (): unknown => {
    return JSON.parse(readFileSync('./bd.json', 'utf-8'));
}

export const escreverArquivo = (dados: any): void => {
    writeFileSync('./bd.json', JSON.stringify(dados));
}