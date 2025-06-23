import React from 'react';
import {FilesContainerProps} from "../../../types/BodyComponents/FilesContainerProps.interface.ts";


const FilesContainer: React.FC<FilesContainerProps> = ({element}) => {
    return (
            <div>
                {element.files && element.files.length > 0 && (
                    <div className="space-y-4">
                        {element.files.map((file, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start bg-gray-50 p-3 rounded-lg shadow-md border border-gray-200 w-full"
                            >
                                {file.mimetype.startsWith("image/") ? (
                                    <a
                                        href={`http://localhost:5001/uploads/${file.filename}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`http://localhost:5001/uploads/${file.filename}`}
                                            alt={file.filename}
                                            className="w-40 h-40 object-cover rounded-lg border border-gray-300 shadow-sm"
                                        />
                                    </a>
                                ) : (
                                    <div className="flex flex-col space-y-1">
                                        <a
                                            href={`http://localhost:5001/uploads/${file.filename}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline hover:text-blue-700 font-medium break-all"
                                        >
                                            {file.filename}
                                        </a>
                                        <span className="text-sm text-gray-500">
                            Type: {file.mimetype}
                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
};

export default FilesContainer;
