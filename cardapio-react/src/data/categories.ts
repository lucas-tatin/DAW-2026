export type Category = {
    alias: string;
    label: string;
}

export const categories: Category[] = [
    { alias: 'todos', label: 'Todos' },
    { alias: 'lanches', label: 'Lanches' },
    { alias: 'porcoes', label: 'Porções' },
    { alias: 'bebidas', label: 'Bebidas' },
    { alias: 'sobremesas', label: 'Sobremesas' },
];

/*
    <button type="button" className="active">Todos</button>
                </li>
                <li>
                    <button type="button">Bebidas</button>
                </li> 
                <li>
                    <button type="button">Lanches</button>
                </li>
                <li>
                    <button type="button">Sobremesas</button>
                </li>
                <li>
                    <button type="button">Combos</button>
}*/