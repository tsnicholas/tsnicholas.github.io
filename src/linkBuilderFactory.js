function initializeLinkElement(link) {
    const linkElement = document.createElement("a");
    linkElement.className = "hstack gap-1";
    linkElement.href = link;
    return linkElement;
}

function createBootStrapIcon(classList) {
    const iconElement = document.createElement("i");
    iconElement.className = classList;
    return iconElement;
}

function buildPhoneLink(data) {
    const sanitizedNumber = data.replace(/[\(\)\s-]/g, "");
    const phoneLink = initializeLinkElement(`tel:${sanitizedNumber}`);
    phoneLink.appendChild(createBootStrapIcon("bi bi-telephone-fill fact-icon"));
    phoneLink.appendChild(document.createTextNode(data));
    return phoneLink;
}

function buildLocationLink(data) {
    const locationLink = initializeLinkElement(data.link);
    locationLink.appendChild(createBootStrapIcon("bi bi-geo-alt-fill fact-icon"));
    locationLink.appendChild(document.createTextNode(data.name));
    return locationLink;
}

export default class LinkBuilderFactory {
    constructor() {
        this.builderMap = new Map([
            ["phone", buildPhoneLink],
            ["location", buildLocationLink]
        ]);
    }

    getBuilder(type) {
        const builder = this.builderMap.get(type);
        if (!builder) {
            throw new Error(`Builder type ${type} not found.`);
        }
        return builder;
    }
}
