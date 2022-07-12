import React from 'react';
interface IProps{
  html?:any
  onClick?: void |any
  className?:string
}

export class OEmbed extends React.PureComponent {
  getRender = (html: any)  => {
    let str = html;
    if (!str || str.length === 0) return null;
    if ((str + '').indexOf('https://www.youtube.com') > -1) {
      str = str.replace(
        /(?:<oembed) (?:url)=(".*)(?:"><\/oembed)>/gm,
        (g:any, g1:any) => {
          return `
              <iframe
                  className="youtube-frame"
                  src="${g1.replace('/embed?v=', '/embed/')}"
                  allowFullScreen
              />
      `;
        },
      );
    }
    return str;
  };
  render() {
    const {html , onClick, className}:IProps = this.props;
    return (
      <div
        onClick={onClick}
        dangerouslySetInnerHTML={{__html: this.getRender(html)}}
        className={className}
      />
    );
  }
}
