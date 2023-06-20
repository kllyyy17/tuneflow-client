import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [songs, setSongs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadSongs();
  }, []);

  const loadSongs = async () => {
    const result = await axios.get("http://localhost:8080/songs");
    setSongs(result.data);
  };

  const deleteSong = async (id) => {
    await axios.delete(`http://localhost:8080/song/${id}`);
    loadSongs();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Artist</th>
              <th scope="col">Source</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
                {songs.map((song, index) => (
                <tr>
                    <th scope="row" key={index}>
                    {index + 1}
                    </th>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>
                      <a href={song.source} target="_blank" rel="noopener noreferrer">
                        {song.source}
                      </a>
                    </td>
                    <td>
                    <Link
                        className="btn btn-primary mx-2"
                        to={`/viewsong/${song.id}`}
                    >
                        View
                    </Link>
                    <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/editsong/${song.id}`}
                    >
                        Edit
                    </Link>
                    <Link
                        className="btn btn-danger mx-2"
                        onClick={() => deleteSong(song.id)}
                    >
                        Delete
                    </Link>
                    </td>
                </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}