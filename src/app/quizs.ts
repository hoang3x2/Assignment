export class Quiz {
    Id: string;
    Text: string;
    Marks: number;
    AnswerId:number;
    Answers: [
        { Id: number, Text:string },
        { Id: number, Text:string },
        { Id: number, Text:string },
        { Id: number, Text:string },
    ]
}
