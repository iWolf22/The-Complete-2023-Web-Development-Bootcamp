export default function Docs(props : { params: {slug: string[]} }) {
    return (
        <h1>{JSON.stringify(props.params.slug)}</h1>
    );
}